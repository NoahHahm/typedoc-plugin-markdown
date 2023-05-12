import * as prettier from 'prettier';
import {
  PageEvent,
  ProjectReflection,
  Reflection,
  RenderTemplate,
  Renderer,
  Theme,
} from 'typedoc';
import { UrlBuilder } from './converter/url-builder';
import { TypedocPluginMarkdownOptions } from './models';
import { MarkdownThemeRenderContext } from './theme-render-context';

export class MarkdownTheme extends Theme {
  private _renderContext: MarkdownThemeRenderContext;
  private _prettierOptions: prettier.Options | null;

  constructor(renderer: Renderer) {
    super(renderer);

    // Warnings
    if (this.application.options.getValue('enableFrontmatter')) {
      this.application.logger.warn(
        '[typedoc-plugin-markdown] `enableFrontmatter` has been removed. Please use plugin-typedoc-frontmatter instead',
      );
    }

    this.listenTo(this.owner, {
      [PageEvent.BEGIN]: this.onBeginPage,
    });
  }

  getRenderContext() {
    if (!this._renderContext) {
      this._renderContext = new MarkdownThemeRenderContext(
        this,
        this.application.options,
      );
    }
    return this._renderContext;
  }

  getPrettierOptions() {
    if (!this._prettierOptions) {
      this._prettierOptions = this.resolvePrettierOptions();
    }
    return this._prettierOptions;
  }

  resolvePrettierOptions() {
    const prettierFile = prettier.resolveConfigFile.sync();
    return prettierFile ? prettier.resolveConfig.sync(prettierFile) : null;
  }

  render(
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>,
  ): string {
    return prettier.format(template(page) as string, {
      ...this.getPrettierOptions(),
      parser: 'markdown',
    });
  }

  getUrls(project: ProjectReflection) {
    const urls = new UrlBuilder(
      this.getRenderContext(),
      this.application.options.getRawValues() as Partial<TypedocPluginMarkdownOptions>,
    ).getUrls(project);

    return urls;
  }

  getNavigation(project: ProjectReflection) {
    return [];
  }

  protected onBeginPage(page: PageEvent) {
    this.getRenderContext().activeLocation = page.url;
  }
}

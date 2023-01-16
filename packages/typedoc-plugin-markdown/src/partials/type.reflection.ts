import { ReflectionType } from 'typedoc';
import { Collapse } from '../models';
import { backTicks } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function reflectionType(
  context: MarkdownThemeRenderContext,
  reflectionType: ReflectionType,
  collapse: Collapse,
) {
  const root =
    reflectionType instanceof ReflectionType
      ? reflectionType.declaration
      : reflectionType;
  if (root.signatures) {
    return collapse === 'function' || collapse === 'all'
      ? backTicks('Function')
      : context.partials.functionType(root.signatures);
  }
  return (collapse === 'object' && !root.indexSignature) || collapse === 'all'
    ? backTicks('Object')
    : context.partials.declarationType(root);
}

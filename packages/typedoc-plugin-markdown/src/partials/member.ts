import {
  DeclarationReflection,
  ReferenceReflection,
  ReflectionKind,
} from 'typedoc';
import { heading } from '../support/els';
import { getReflectionHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function member(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  const md: string[] = [];

  const headingLevel = getReflectionHeadingLevel(reflection);

  if (context.getOption('namedAnchors')) {
    md.push(`<a id="${reflection.anchor}" name="${reflection.anchor}"></a>`);
  }

  if (
    !reflection.hasOwnDocument &&
    !reflection.kindOf(ReflectionKind.Constructor)
  ) {
    md.push(
      heading(headingLevel, context.partials.reflectionTitle(reflection)),
    );
  }

  if (
    [
      ReflectionKind.Class,
      ReflectionKind.Interface,
      ReflectionKind.Enum,
    ].includes(reflection.kind)
  ) {
    md.push(context.partials.reflection(reflection));
  } else {
    if (reflection.signatures) {
      reflection.signatures.forEach((signature) => {
        md.push(context.partials.signatureMember(signature));
      });
    } else {
      if (reflection.hasGetterOrSetter()) {
        if (reflection.getSignature) {
          md.push(context.partials.signatureMember(reflection.getSignature));
        }
        if (reflection.setSignature) {
          md.push(context.partials.signatureMember(reflection.setSignature));
        }
      } else {
        if (reflection instanceof ReferenceReflection) {
          md.push(context.partials.referenceMember(reflection));
        } else if (reflection instanceof DeclarationReflection) {
          md.push(context.partials.declarationMember(reflection));
        }
      }
    }
  }

  return md.join('\n\n');
}

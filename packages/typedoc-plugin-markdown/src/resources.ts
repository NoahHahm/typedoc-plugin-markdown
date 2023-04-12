// THIS FILE IS AUTOGENERATED - DO NOT EDIT DIRECTLY
import { 
 ArrayType,
 ConditionalType,
 ContainerReflection,
 Comment,
 CommentDisplayPart,
 DeclarationHierarchy,
 DeclarationReflection,
 InferredType,
 IntersectionType,
 IntrinsicType,
 IndexedAccessType,
 LiteralType,
 PageEvent,
 ParameterReflection,
 ProjectReflection,
 QueryType,
 ReferenceReflection,
 ReferenceType,
 ReflectionType,
 SignatureReflection,
 SomeType,
 TupleType,
 TypeOperatorType,
 TypeParameterReflection,
 UnionType,
 UnknownType } from 'typedoc';
import { MarkdownThemeRenderContext } from './theme-context';
import { Collapse } from './models';
import { memberTemplate } from './templates/member';
import { projectTemplate } from './templates/project';
import { readmeTemplate } from './templates/readme';
import { reflectionTemplate } from './templates/reflection';
import { breadcrumbs } from './partials/breadcrumbs';
import { commentParts } from './partials/comment.parts';
import { comment } from './partials/comment';
import { frontmatter } from './partials/frontmatter';
import { hierarchy } from './partials/hierarchy';
import { declarationMemberDef } from './partials/member.declaration.def';
import { declarationMember } from './partials/member.declaration';
import { indexSignatureTitle } from './partials/member.indexsignature.title';
import { referenceMember } from './partials/member.reference';
import { reflectionMember } from './partials/member.reflection';
import { signatureTitle } from './partials/member.signature.title';
import { signatureMember } from './partials/member.signature';
import { member } from './partials/member';
import { typeDeclarationList } from './partials/member.typedeclaration.list';
import { typeDeclarationTable } from './partials/member.typedeclaration.table';
import { typeParameters } from './partials/member.typeparameters';
import { members } from './partials/members';
import { pageTitle } from './partials/page.title';
import { propertyName } from './partials/property.name';
import { sources } from './partials/sources';
import { parametersTable } from './partials/table.parameters';
import { toc } from './partials/toc';
import { arrayType } from './partials/type.array';
import { conditionalType } from './partials/type.conditional';
import { declarationType } from './partials/type.declaration';
import { functionType } from './partials/type.function';
import { indexAccessType } from './partials/type.indexAccess';
import { inferredType } from './partials/type.inferred';
import { intersectionType } from './partials/type.intersection';
import { intrinsicType } from './partials/type.intrinsic';
import { literalType } from './partials/type.literal';
import { queryType } from './partials/type.query';
import { referenceType } from './partials/type.reference';
import { reflectionType } from './partials/type.reflection';
import { someType } from './partials/type.some';
import { tupleType } from './partials/type.tuple';
import { typeOperatorType } from './partials/type.typeOperator';
import { unionType } from './partials/type.union';
import { unknownType } from './partials/type.unknown';

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r);
}
export type Templates = {
  memberTemplate: (page: PageEvent<DeclarationReflection>) => string;
  projectTemplate: (page: PageEvent<ProjectReflection>) => string;
  readmeTemplate: (page: PageEvent<ProjectReflection>) => string;
  reflectionTemplate: (page: PageEvent<DeclarationReflection>) => string;
};

export type Partials = {
  breadcrumbs: (page: PageEvent<DeclarationReflection | ProjectReflection>) => string;
  commentParts: (parts: CommentDisplayPart[]) => string;
  comment: (comment: Comment, headingLevel?: number |  undefined) => string;
  frontmatter: (page: PageEvent<DeclarationReflection | ProjectReflection>) => string;
  hierarchy: (declarationHierarchy: DeclarationHierarchy) => string;
  declarationMemberDef: (reflection: DeclarationReflection) => string;
  declarationMember: (declaration: DeclarationReflection) => string;
  indexSignatureTitle: (signature: SignatureReflection) => string;
  referenceMember: (props: ReferenceReflection) => string;
  reflectionMember: (reflection: DeclarationReflection) => string;
  signatureTitle: (signature: SignatureReflection, accessor?: string |  undefined) => string;
  signatureMember: (signature: SignatureReflection, parentHeadingLevel?: number |  undefined) => string;
  member: (reflection: DeclarationReflection) => string;
  typeDeclarationList: (props: DeclarationReflection[]) => string;
  typeDeclarationTable: (props: DeclarationReflection[]) => string;
  typeParameters: (typeParameters: TypeParameterReflection[]) => string;
  members: (container: ContainerReflection) => string;
  pageTitle: (page: PageEvent<DeclarationReflection>) => string;
  propertyName: (property: DeclarationReflection) => string;
  sources: (reflection: DeclarationReflection | SignatureReflection, headingLevel: number) => string;
  parametersTable: (parameters: ParameterReflection[]) => string;
  toc: (reflection: DeclarationReflection | ProjectReflection) => string;
  arrayType: (arrayType: ArrayType) => string;
  conditionalType: (conditionalType: ConditionalType) => string;
  declarationType: (declarationReflection: DeclarationReflection, collapse?: Collapse) => string;
  functionType: (modelSignatures: SignatureReflection[]) => string;
  indexAccessType: (model: IndexedAccessType) => string;
  inferredType: (model: InferredType) => string;
  intersectionType: (model: IntersectionType) => string;
  intrinsicType: (model: IntrinsicType) => string;
  literalType: (literalType: LiteralType) => string;
  queryType: (queryType: QueryType) => string;
  referenceType: (referenceType: ReferenceType) => string;
  reflectionType: (reflectionType: ReflectionType, collapse: Collapse) => string;
  someType: (someType: SomeType, collapse?: Collapse) => string;
  tupleType: (tupleType: TupleType) => string;
  typeOperatorType: (model: TypeOperatorType) => string;
  unionType: (unionType: UnionType) => string;
  unknownType: (model: UnknownType) => string;
};

export const templates = (context: MarkdownThemeRenderContext): Templates => ({
  memberTemplate: bind(memberTemplate, context),
  projectTemplate: bind(projectTemplate, context),
  readmeTemplate: bind(readmeTemplate, context),
  reflectionTemplate: bind(reflectionTemplate, context),
});

export const partials = (context: MarkdownThemeRenderContext): Partials => ({
  breadcrumbs: bind(breadcrumbs, context),
  commentParts: bind(commentParts, context),
  comment: bind(comment, context),
  frontmatter: bind(frontmatter, context),
  hierarchy: bind(hierarchy, context),
  declarationMemberDef: bind(declarationMemberDef, context),
  declarationMember: bind(declarationMember, context),
  indexSignatureTitle: bind(indexSignatureTitle, context),
  referenceMember: bind(referenceMember, context),
  reflectionMember: bind(reflectionMember, context),
  signatureTitle: bind(signatureTitle, context),
  signatureMember: bind(signatureMember, context),
  member: bind(member, context),
  typeDeclarationList: bind(typeDeclarationList, context),
  typeDeclarationTable: bind(typeDeclarationTable, context),
  typeParameters: bind(typeParameters, context),
  members: bind(members, context),
  pageTitle: bind(pageTitle, context),
  propertyName: bind(propertyName, context),
  sources: bind(sources, context),
  parametersTable: bind(parametersTable, context),
  toc: bind(toc, context),
  arrayType: bind(arrayType, context),
  conditionalType: bind(conditionalType, context),
  declarationType: bind(declarationType, context),
  functionType: bind(functionType, context),
  indexAccessType: bind(indexAccessType, context),
  inferredType: bind(inferredType, context),
  intersectionType: bind(intersectionType, context),
  intrinsicType: bind(intrinsicType, context),
  literalType: bind(literalType, context),
  queryType: bind(queryType, context),
  referenceType: bind(referenceType, context),
  reflectionType: bind(reflectionType, context),
  someType: bind(someType, context),
  tupleType: bind(tupleType, context),
  typeOperatorType: bind(typeOperatorType, context),
  unionType: bind(unionType, context),
  unknownType: bind(unknownType, context),
});

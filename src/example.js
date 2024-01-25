graphql`
  query exampleQuery($queryArg: Boolean!) {
    field @include(if: $queryArg)
    resolverField(arg: $queryArg)
    ...exampleFragment @arguments(arg: $queryArg)
  }
`;

graphql`
  fragment exampleFragment on Query @argumentDefinitions(arg: { type: "Boolean!" }) {
    field @skip(if: $arg)
    fieldWithArg(arg: $arg)
    ...exampleResolver
  }
`;

/**
 * @RelayResolver Query.resolverField(arg: Boolean): String
 * @rootFragment exampleResolver
 */
export function resolverField(exampleResolverKey, arg) {
  const user = readFragment(
    graphql`
      fragment exampleResolver on Query {
        field
      }
    `,
    exampleResolverKey
  );

  return "example";
}

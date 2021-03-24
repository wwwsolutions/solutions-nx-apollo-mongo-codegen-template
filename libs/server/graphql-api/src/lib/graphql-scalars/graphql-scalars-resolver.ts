/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DateTimeResolver,
  EmailAddressResolver,
  UnsignedIntResolver,
} from 'graphql-scalars';

export const graphqlScalarsResolver = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
  UnsignedInt: UnsignedIntResolver,
};

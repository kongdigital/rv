// const R = require('ramda');

// const isObject = R.is(Object);
// const isString = R.is(String);
// const isNumber = R.is(Number);
// const isArray = R.is(Array);

// const matches = R.match;

// const isOneOf = (...args) => value => R.flatten(args).includes(value);

// // const isRequred = R.identity();
// const isInteger = Number.isInteger;
// // const isNil = R.isNil;
// // const isEmpty = R.isEmpty;
// const isNaN = () => R.equals(Number.NaN);
// const isNull = () => R.equals(null);
// const isUndefined = () => R.equals(undefined);
// const isTrue = () => R.equals(true);
// const isFalse = () => R.equals(false);

// const isPostive = () => isGreaterOrEqual(0);
// const isNegative = () => isLesserThan(0);

// const isPostiiveInfinity = () => R.equals(Number.POSITIVE_INFINITY);
// const isNegativeInfinity = () => R.equals(Number.NEGATIVE_INFINITY);

// const isPositiveInteger = [isPositive(), isInteger(), isNumber()];
// const isNegativeInteger = [isNegative(), isInteger(), isNumber()];

// const notNil = R.complement(R.isNil);
// const notNull = R.complement(R.isNull);
// const notEmpty = R.complement(R.isEmpty);
// const notUndefined = R.complement(isUndefined);

// const hasRequiredKeys = requiredKeys => objKeys =>
//   _hasSymmetricDifference(requiredKeys, R.keys(objKeys));

// // Transformation
// const defaultsTo = value => R.when(isEmpty(), R.always(value));

// // const toConstantCase = value =>
// // const toKebabCase = value =>
// // const toSnakeCase = value =>
// // const toCamelCase = (![a-Z])([a-Z]) replace uppercase

// const toNumber = () => value => parseFloat(value) && isFinite(value);

// const isNumber = () => R.both(parseFloat, isFinite);

// const isEmail = () => R.match(/\.+@\.+/);
// const isIP4Address = () =>
//   R.pipe(
//     R.split('.'),
//     R.map(),
//   );

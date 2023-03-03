const Ajv = require("ajv")
const ajv = new Ajv({allErrors: true, strict: true})

const schema = {
  type: "object",
  properties: {
    foo: {type: "string"},
    bar: {type: "number", maximum: 3},
    lineHeight: {type: "number", maximum: 3}
  },
  required: [],
  additionalProperties: false
}

const validate = ajv.compile(schema)

test({foo: "", bar: 2})
test({foo: "hello", bar: 2})
test({foo: undefined, bar: 2, lineHeight: undefined})

function test(data) {
  const valid = validate(data)
  if (valid) console.log("Valid!", data)
  else console.log("Invalid: " + ajv.errorsText(validate.errors))
}

//String primitive
const stringSchema = {
  type: "string"
}
const validateStringSchema = ajv.compile(stringSchema)
testSimpleSchema(undefined)
testSimpleSchema("AB")
testSimpleSchema(null)

function testSimpleSchema(data) {
  const valid = validateStringSchema(data)
  if (valid) console.log("string schema is Valid!", data)
  else
    console.log(
      "String schema is Invalid: " + ajv.errorsText(validate.errors),
      " data : ",
      data
    )
}
console.log(
  "***************************Number Primitive***************************"
)
//Number primitive type
const numberSchema = {type: "number"}
const validateNumberSchema = ajv.compile(numberSchema)

//tests
testNumberSchema(-1)
testNumberSchema(42)
testNumberSchema(undefined)

function testNumberSchema(data) {
  const valid = validateNumberSchema(data)
  if (valid) console.log("number schema is Valid!", data)
  else
    console.log(
      "number schema is Invalid: " + ajv.errorsText(validate.errors),
      " data : ",
      data
    )
}

console.log(
  "***************************Integer Primitive****************************"
)
//Integer primitive type
const integerSchema = {type: "integer"}
const validateIntegerSchema = ajv.compile(integerSchema)

//tests
testIntegerSchema(1.0)
testIntegerSchema(42)
testIntegerSchema(undefined)

function testIntegerSchema(data) {
  const valid = validateIntegerSchema(data)
  if (valid) console.log("integer schema is Valid!", data)
  else
    console.log(
      "integer schema is Invalid: " + ajv.errorsText(validate.errors),
      " data : ",
      data
    )
}

console.log(
  "***************************Array Primitive***************************"
)
//array primitive type
const arraySchema = {type: "array"}
const validatearraySchema = ajv.compile(arraySchema)

//tests
testarraySchema([1, 2, 3, 4, 5])
testarraySchema([3, "different", {types: "of values"}])
testarraySchema([1, undefined, 2, undefined])
testarraySchema(undefined)
testarraySchema(null)

function testarraySchema(data) {
  const valid = validatearraySchema(data)
  if (valid) console.log("array schema is Valid!", data)
  else
    console.log(
      "array schema is Invalid: " + ajv.errorsText(validate.errors),
      " data : ",
      data
    )
}

console.log(
  "***************************Null Primitive***************************"
)
//null primitive type
const nullSchema = {type: "null"}
const validatenullSchema = ajv.compile(nullSchema)
//tests
testnullSchema(null)
testnullSchema(undefined)

function testnullSchema(data) {
  const valid = validatenullSchema(data)
  if (valid) console.log("null schema is Valid!", data)
  else
    console.log(
      "null schema is Invalid: " + ajv.errorsText(validate.errors),
      " data : ",
      data
    )
}

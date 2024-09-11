const yup = require('yup');

const DESCRIPTION_VALIDARION_SCHEMA = yup.string().trim().min(5).max(255);
const DEADLINE_VALIDARION_SCHEMA = yup.date().min(new Date());

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  description: DESCRIPTION_VALIDARION_SCHEMA.required(),
  deadline: DEADLINE_VALIDARION_SCHEMA.required(),
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  description: DESCRIPTION_VALIDARION_SCHEMA,
  deadline: DEADLINE_VALIDARION_SCHEMA,
  isDone: yup.boolean(),
});

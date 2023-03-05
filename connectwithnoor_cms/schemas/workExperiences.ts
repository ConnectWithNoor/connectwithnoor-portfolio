import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'workExperiences',
  title: 'Work Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Job Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})

import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      initialValue: new Date().getFullYear(),
      validation: (rule) => rule.min(2010).max(new Date().getFullYear()).required(),
    }),
    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{type: 'reference', to: {type: 'workExperiences'}}],
    }),
  ],
})

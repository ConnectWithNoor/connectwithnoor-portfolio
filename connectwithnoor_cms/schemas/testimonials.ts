import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageUrl',
      title: 'ImageUrl',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        accept: 'image/*',
        hotspot: true,
      },
    }),
    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})

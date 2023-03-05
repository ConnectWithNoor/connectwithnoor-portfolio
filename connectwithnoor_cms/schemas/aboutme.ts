import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'about-me',
  title: 'About me',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
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
  ],
})

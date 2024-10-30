import { CollectionConfig } from 'payload/types';

const Post: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'slug',
      unique: true,
      type: 'text',
      required: true,
      validate: (val) => {
        const regex = /^[a-zA-Z0-9-]+$/;
        if (regex.test(val)) return true;
        return 'Slug must only contain letters, numbers, and dashes.';
      },
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea',
      maxLength: 250,
      required: false,
    },
    {
      name: 'body',
      label: 'Body',
      type: 'richText',
      required: true,
    },
    {
      name: 'category',
      label: 'Post Category',
      type: 'select',
      options: ['blog', 'case study'],
      required: true,
    },
    {
      name: 'image',
      label: 'Hero Image',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'isFeatured',
      label: 'Featured',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      required: false,
    },
  ],
};

export default Post;

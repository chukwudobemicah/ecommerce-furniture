import { defineType, defineField } from "sanity";
import { AddCircleIcon } from "@sanity/icons";

function generateProductCode() {
  // Generate a random uppercase letter
  const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
  // Generate a random 6-digit number
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  return `${randomLetter}${randomNumber}`;
}

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: AddCircleIcon,
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
      readOnly: true,
      initialValue: () => `PROD-${Date.now()}`,
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "string",
      readOnly: true,
      initialValue: generateProductCode,
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discount_price",
      title: "Discount Price",
      type: "number",
      //   validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "code",
      media: "image",
    },
  },
});

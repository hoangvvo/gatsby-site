# gatsby-site

This is the old version of my personal + blog website built with [Gatsby](https://www.gatsbyjs.com/), with data hosted on Contentful. 

Link: [old.hoangvvo.com](https://old.hoangvvo.com).

> New version is at [hoangvvo.com](https://hoangvvo.com). [hoangvvo/hvvo.dev](https://github.com/hoangvvo/hvvo.dev)

Blog, Portfolio, images or any other content are hosted on [Contentful](https://www.contentful.com/). 

## Deploy

1. Set the required Contentful variables `CONTENTFUL_ACCESS_TOKEN` and `CONTENTFUL_SPACE_ID`.
2. Set the `FATHOM_SITE_ID` for [Fathom Analytics](https://usefathom.com/) **or** comment out the plugin in `gatsby-config.js`.

### Contentful model

```json
{
  "name": "Blog Post",
  "displayField": "title",
  "fields": [
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "publishDate",
      "name": "Publish Date",
      "type": "Date",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "slug",
      "name": "Slug",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [
        {
          "unique": true
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "image",
      "name": "Image",
      "type": "Link",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    },
    {
      "id": "content",
      "name": "Content",
      "type": "Text",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "description",
      "name": "Description",
      "type": "Text",
      "localized": false,
      "required": true,
      "validations": [
        {
          "size": {
            "min": 50,
            "max": 160
          }
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "author",
      "name": "Author",
      "type": "Array",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "items": {
        "type": "Link",
        "validations": [
          {
            "linkContentType": [
              "person"
            ]
          }
        ],
        "linkType": "Entry"
      }
    },
    {
      "id": "tags",
      "name": "Tags",
      "type": "Array",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "items": {
        "type": "Symbol",
        "validations": []
      }
    },
    {
      "id": "category",
      "name": "Category",
      "type": "Array",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "items": {
        "type": "Link",
        "validations": [
          {
            "linkContentType": [
              "category"
            ]
          }
        ],
        "linkType": "Entry"
      }
    }
  ]
}
```

```json
{
  "name": "Category",
  "displayField": "name",
  "fields": [
    {
      "id": "name",
      "name": "name",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "description",
      "name": "description",
      "type": "Text",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
```

```json
{
  "name": "Person",
  "displayField": "name",
  "fields": [
    {
      "id": "name",
      "name": "Name",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "bio",
      "name": "Bio",
      "type": "Text",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "image",
      "name": "Image",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    },
    {
      "id": "link",
      "name": "Link",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
```

```json
{
  "name": "Portfolio",
  "displayField": "name",
  "fields": [
    {
      "id": "name",
      "name": "Name",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "isOngoing",
      "name": "Is ongoing",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "startDate",
      "name": "Start Date",
      "type": "Date",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "endDate",
      "name": "End Date",
      "type": "Date",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "description",
      "name": "Description",
      "type": "Text",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "image",
      "name": "Image",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    },
    {
      "id": "category",
      "name": "Category",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "link",
      "name": "Link",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "tags",
      "name": "Tags",
      "type": "Array",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "items": {
        "type": "Symbol",
        "validations": []
      }
    }
  ]
}
```

## Attribution and modification

Feel free to replace my name and such with yours. Attribution is not required but appreciated.

## License

MIT

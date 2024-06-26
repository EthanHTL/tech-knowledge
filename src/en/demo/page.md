---
title: Page Config
icon: file
order: 3
author: Ms.Hope
date: 2020-01-01
category:
  - Guide
tag:
  - Page config
  - Guide
sticky: true
star: true
footer: Footer content for test
copyright: No Copyright
permalink: /en/demo/50kg0fxi/
---

Content before `more` comment is regarded as page excerpt.

<!-- more -->

## Page Title

The first H1 title in Markdown will be regarded as page title.

You can also set title in Markdown's Frontmatter:

```md
---
title: Page Title
---
```

## Page Information

You can set page information in Markdown's Frontmatter.

- The author is Ms.Hope.
- The writing date is January 1, 2020
- Category is "Guide"
- Tags are "Page Config" and "Guide"

## Page Content

You are free to write your Markdown here.

::: tip Assets

- You can place images besides your Markdown files nd use **relative links**.
- For images in `.vuepress/public` directory, please use absolute links (i.e.: starting with `/`).

:::

## Components

Each markdown page is converted into a Vue component, which means you can use Vue syntax in Markdown:

{{ 1 + 1 }}

<!-- markdownlint-disable MD033 -->

<ul>
  <li v-for="i in 3">{{ i }}</li>
</ul>

<!-- markdownlint-enable MD033 -->

You can also create and import your own components.

<MyComponent />

<script setup>
import { defineComponent, h, ref } from 'vue';

const MyComponent = defineComponent({
  setup() {
    const input = ref('Hello world!');
    const onInput = (e) => {
      input.value = e.target.value;
    };

    return () => [
      h('p', [
        h('span','Input: '),
        h('input', {
          value: input.value,
          onInput,
        }),
      ]),
      h('p', [h('span','Output: '), input.value]),
    ];
  },
});
</script>

---

The theme contains some useful components. Here are some examples:

- A dark blue badge text badge at the end of line. <Badge text="Badge text" color="#242378" />

- A card:

  ```component VPCard
  title: Mr.Hope
  desc: Where there is light, there is hope
  logo: https://mister-hope.com/logo.svg
  link: https://mister-hope.com
  background: rgba(253, 230, 138, 0.15)
  ```

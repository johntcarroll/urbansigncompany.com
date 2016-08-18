---
title:  Digital Experiences
date:   2014-10-22 17:26:19
categories: application
layout: default
permalink: /:categories/:title/
folder: applications
---
<ul>
  {% for post in site.categories.digital-experiences %}
    <div>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </div>
  {% endfor %}
</ul>
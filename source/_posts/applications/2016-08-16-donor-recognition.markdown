---
title:  "donor recognition"
date:   2014-10-22 17:26:19
categories: application
layout: default
permalink: /:title/
folder: applications
---
<ul>
  {% for post in site.categories.donor-recognition %}
    <div>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </div>
  {% endfor %}
</ul>
# bezier 0.0.1

| 类型 \ 感觉 | 标准 | 舒缓的 | 较强的
---|---|---|---
| 缓入曲线 | <cubic-bezier :param="[.55, .055, .675, .19]" /> | <cubic-bezier :param="[.47, 0, .745, .715]" /> |<cubic-bezier :param="[.755, .05, .855, .06]" />
| 缓出曲线 | <cubic-bezier :param="[.215, .61, .355, 1]" /> | <cubic-bezier :param="[.39, .575, .565, 1]" /> |<cubic-bezier :param="[.23, 1, .32, 1]" />
| 缓入缓出曲线 | <cubic-bezier :param="[.645, .045, .355, 1]" /> | <cubic-bezier :param="[.445, .05, .55, .95]" /> |<cubic-bezier :param="[.86, 0, .07, 1]" />

import os

css_file = r"d:\HoangLam\MMO\tht-global\css\site.css"
css_rule = """

/* Mobile Responsive Adjustments */
@media (max-width: 767.98px) {
  /* Hide Map */
  .jai-map-wrap {
    display: none !important;
  }
  
  /* Hide Service Card Images */
  .tax-service-card__image {
    display: none !important;
  }
  
  /* Hide Large Icons (Progress & Feature Icons) */
  .glac-icon-base {
    display: none !important;
  }
  
  /* Hide QuickBooks Images */
  .glac-accounting__feature-image-box {
    display: none !important;
  }
  
  /* Hide Banking Illustration */
  #ijyvk5 {
    display: none !important;
  }
}
"""

try:
    with open(css_file, "a", encoding="utf-8") as f:
        f.write(css_rule)
    print(f"Successfully appended CSS rule to {css_file}")
except Exception as e:
    print(f"Error appending to file: {e}")

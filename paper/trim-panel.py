"""Trim a panel screenshot back to its ink, keeping the page's own padding as the margin.
Chrome shoots the whole window, so the window height is a ceiling and this is the figure."""
import sys
from PIL import Image
PAD = 68          # 34 CSS px of page padding at 2x
im = Image.open(sys.argv[1]).convert('RGB')
bg = im.getpixel((0, 0))
diff = Image.new('L', im.size)
diff.putdata([0 if px == bg else 255 for px in im.getdata()])
box = diff.getbbox()
if box:
    l, t, r, b = box
    im = im.crop((0, max(0, t - PAD), im.width, min(im.height, b + PAD)))
    im.save(sys.argv[1])

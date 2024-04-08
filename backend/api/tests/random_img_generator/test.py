from PIL import Image, ImageDraw
import random

width, height = 500, 500
background_color = (255, 255, 255)

image = Image.new("RGB", (width, height), background_color)

draw = ImageDraw.Draw(image)

def generate_random_figure(draw):
    figure_type = random.choice(["circle", "rectangle", "line"])
    color = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))

    if figure_type == "circle":
        x = random.randint(1, width)
        y = random.randint(1, height)
        radius = random.randint(10, 100)
        draw.ellipse([x - radius, y - radius, x + radius, y + radius], fill=color)

    elif figure_type == "rectangle":
        x = random.randint(1, width)
        y = random.randint(1, width)
        draw.rectangle([x, y, x, y], fill=color)

    elif figure_type == "line":
        x1 = random.randint(1, width)
        y1 = random.randint(1, height)
        x2 = random.randint(1, width)
        y2 = random.randint(1, height)
        draw.line((x1, y1, x2, y2), fill=color, width=random.randint(1, 10))

num_figures = 50
for _ in range(num_figures):
    generate_random_figure(draw)

image.save("random_figures.png")
image.show()

from PIL import Image, ImageDraw
import math

palette = [
    "#00272b",
    "#e0ff4f",
    "#007f5f",
    "#2b9348",
    "#55a630",
    "#80b918",
    "#aacc00",
    "#bfd200",
    "#d4d700"
]


def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def encode_string_to_image(text, image_size):
    square_count = math.ceil(math.sqrt(len(text)))
    image = Image.new("RGB", (image_size, image_size), "white")
    draw = ImageDraw.Draw(image)
    square_size = image_size // square_count
    for i, char in enumerate(text):
        row = i // square_count
        col = i % square_count
        x0 = col * square_size
        y0 = row * square_size
        x1 = x0 + square_size
        y1 = y0 + square_size
        color_index = ord(char) % len(palette)
        color = hex_to_rgb(palette[color_index])
        draw.rectangle([x0, y0, x1, y1], fill=color)

    return image


text_to_encode = "Bdacu Rwwdahuhud"
image_size = 400
encoded_image = encode_string_to_image(text_to_encode, image_size)
encoded_image.save("encoded_image_with_custom_palette.png")

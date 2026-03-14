import fitz

doc = fitz.open("ours.pdf")
found = False
for i in range(len(doc)):
    images = doc.get_page_images(i)
    if images:
        xref = images[0][0] # First image found
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        with open("logo.jpg", "wb") as f:
            f.write(image_bytes)
        print("Logo extracted from PDF!")
        found = True
        break

if not found:
    print("Could not find logo in ours.pdf")

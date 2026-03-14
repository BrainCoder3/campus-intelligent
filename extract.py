import fitz

doc = fitz.open("ours.pdf")
text = ""
for page in doc:
    text += page.get_text()

with open("content.txt", "w", encoding="utf-8") as f:
    f.write(text)

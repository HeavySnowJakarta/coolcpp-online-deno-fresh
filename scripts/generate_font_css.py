# This file reads the js dictionary that stores font filenames as input and
# outputs it's corresponding CSS styles.

# Usage: Put the fonts' name into a plain text file on the same directory
# with this script, one per line, like this:

'''
0xproto
cascadia-mono
code-new-roman
'''

# Then set the file name as `fonts.txt`, run this script (with no parameter)
# and it will generate a `fonts.css` file with the corresponding CSS styles.

ans = "/* This file is generated automatically by `generate_font_css.py`. */\n\n"

if __name__ == "__main__":
    input_file = open("fonts.txt", "r")
    output_file = open("fonts.css", "w")
    lines = input_file.read().splitlines()
    for line in lines:
        ans += "@font-face {\n"
        ans += "    font-family: '" + line + "';\n"
        ans += "    src: url('../fonts/" + line + ".ttf');\n"
        ans += "}\n\n"

    output_file.write(ans)
const DATA = [
    {
        id : 0,
        title : "Portrait",
        price : 7500,
        desc : "A representation of a person, usually focusing on the face and its expression",
        img : "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90fl9l5382806vmqyt1nztz9w/public"
    },
    {
        id : 1,
        title : "Sketch",
        price : 8009,
        desc : "A rough or unfinished drawing, often done quickly to capture the essence of a subject",
        img : "https://enlightenthelife.com/wp-content/uploads/2023/12/Cat-Drawing.png"
    },
    {
        id : 2,
        title : "Realistic",
        price : 9509,
        desc : "Drawings that aim to closely resemble the appearance of the subject, often characterized by attention to detail and shading.",
        img : "https://pics.craiyon.com/2023-07-03/03acf5c072454f0bbdb1c94537b5178c.webp"
    },
    {
        id : 3,
        title : "Fantasy/Sci-Fi ",
        price : 1050,
        desc : "Imaginative drawings depicting otherworldly scenes, creatures, or futuristic technology.",
        img : "https://cdn.pixabay.com/photo/2020/06/19/08/42/fantasy-5316260_1280.jpg"
    },
    {
        id : 4,
        title : "Pen and Ink",
        price : 1150,
        desc : "Drawings made with pen and ink, often using cross-hatching or stippling techniques for shading.",
        img : "https://cdn5.vectorstock.com/i/1000x1000/43/19/ancient-pen-inkwell-and-old-ink-vector-12334319.jpg"
    },
    {
        id : 5,
        title : "Still life",
        price : 1250,
        desc : " A composition of inanimate objects arranged together, often on a table, to create a picture.",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8S3oep_X0lFCArdKPBB1QFx2ZuvZdr5xTA&usqp=CAU"
    },
    {
        id : 4,
        title : "Nature",
        price : 875,
        desc : "colorfull",
        img : "data:image/jpeg;base64,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"
    },
    {
        id : 5,
        title : "Abstract",
        price : 1250,
        desc : "Art that does not attempt to represent an accurate depiction of visual reality but instead uses shapes, colors, forms, and gestural marks to achieve its effect",
        img : "https://img.freepik.com/free-photo/abstract-paint-background-with-multi-colored-watercolor-painting-generated-by-ai_188544-15558.jpg"
    }
]

export default DATA;
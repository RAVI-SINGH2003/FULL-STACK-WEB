// const rootNode = document.getRootNode();
// console.log(rootNode);
// const htmlElementNode = rootNode.childNodes[0];
// console.log(rootNode.childNodes); /* NodeList [html] */
// console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes);
// const headElementNode =htmlElementNode.childNodes[0];
// const textElementNode =htmlElementNode.childNodes[1];
// const bodyElementNode =htmlElementNode.childNodes[2];
// console.log(headElementNode,textElementNode,bodyElementNode)

/*parent node of head node*/
// console.log(headElementNode.parentNode)


/*sibling relation */
/*check next sibling of head*/
// console.log(headElementNode.nextSibling);

// console.log(headElementNode.nextSibling.textContent);

/*check next next sibling of head*/

// console.log(headElementNode.nextSibling.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling.textContent);

/*next element sibling =>ignore text node which containn newline and whitespace */
// console.log(headElementNode.nextElementSibling);

// console.log(headElementNode.childNodes)

// ################# task #######################
// select h1 containing my heading and goto its parent and change backgroundColor and textColor of it
// const h1 = document.querySelector("h1");
// const container = h1.parentNode;
// container.style.backgroundColor="red";
// container.style.color = "#fff";

// const body = container.parentNode;
// console.log(body);


// ############## selecting body directly usnig document root node in dom tree
// const body = document.body;
// console.log(body);
// body.style.backgroundColor="red";
// body.style.color = "#fff";

// ################## selecting head ################
// const head = document.querySelector("head");
// console.log(head);
// const title = head.querySelector("title");
// console.log(title,title.childNodes)

/*to see all child nodes except any type of text nodes */
// const container = document.querySelector(".container")
// console.log(container.childNodes);
// console.log(container.children)


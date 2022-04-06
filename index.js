console.log("Hello");
let obj = [
  { tags: [{ tag: "React" }, { tag: "css" }, { tag: "html" }] },
  { tags: [{ tag: "React" }, { tag: "css" }, { tag: "html" }] },
  { tags: [{ tag: "React" }, { tag: "node" }, { tag: "Travel" }] },
];
let newObj = {};
let count = 0;

obj.map((data) => {
  data.tags.map((metadata) => {
    let key = metadata.tag;
    console.log(key);
    if (newObj[key]) {
      console.log("It is present");
      console.log(newObj[key])
      newObj[key] = newObj[key] + 1;
      
    } else {
        console.log("Not Present",newObj[key])
      newObj[key] = count + 1;
    }
  });
});
console.log(newObj);

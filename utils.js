// Paper figures are kept in index.html but hidden. Set to true to show them again.
const SHOW_PAPER_FIGURES = false;

function createProjectElement(id, project){
    /* Create an element in Project
    tag: some tags
    title: title of the project or publications
    paper_url: link to the paper
    authors: authors
    conference: publication venue
    image (optional): directory to project image
    others (optional): anything else
    */
    if (project.tag == null)
        project.tag = id;
    if (project.others == null)
        project.others = "";

    html_img = `<img src='${project.image}' style="max-width: 160px"></div></div>`
    html_txt = `<p>
      <a href="${project.paper_url}"><papertitle>${project.title}</papertitle></a>
      <br>
      ${project.authors}
      <br>
      <em>${project.conference}</em>
      <br>
      ${project.others}`

    const imgCell = document.getElementById(id + "-img");
    const txtCell = document.getElementById(id + "-txt");
    if (SHOW_PAPER_FIGURES) {
        imgCell.innerHTML = html_img;
    } else {
        imgCell.hidden = true;
        txtCell.width = "100%";
    }
    txtCell.innerHTML = html_txt;
}

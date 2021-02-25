const createMgrCard = ({name, id, email, office}) =>
`<div class="col s6 m4">
<div class="card blue-grey darken-2">
    <div class="card-content white-text">
        <span class="card-title">${name}</span>
        <p>PerNr: ${id} | Suite: ${office}</p>
    </div>
    <div class="card-action">
        <i class="fas fa-bolt fa-lg"></i>
        <a href="mailto:${email}>${email}</a>
    </div>
</div>
</div>`
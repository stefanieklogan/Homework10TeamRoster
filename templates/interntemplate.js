const createInternCard = ({ name, id, email, school }) =>
    `<div class="col s6 m4">
            <div class="card blue-grey darken-2">
                <div class="card-content white-text">
                    <span class="card-title">${name}</span>
                    <p>PerNr: ${id} | ${school}</p>
                </div>
                <div class="card-action">
                    <i class="fas fa-graduation-cap fa-lg"></i>
                    <a href="mailto:${email}>${email}</a>
                </div>
            </div>
        </div>`
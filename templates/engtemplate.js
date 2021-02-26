const createEngCard = ({ name, id, email, github }) => {
return `<div class="col s6 m4">
            <div class="card blue-grey darken-2">
                <div class="card-content white-text">
                    <span class="card-title">${name}</span>
                    <p>PerNr: ${id} | GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
                </div>
                <div class="card-action">
                    <i class="fas fa-cog fa-lg"></i>
                    <a href="mailto:${email}">${email}</a>
                </div>
            </div>
        </div>`
}

module.exports = createEngCard
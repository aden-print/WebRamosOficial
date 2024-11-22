// script.js
document.addEventListener("DOMContentLoaded", () => {
    const clients = [
        { name: "Juan Pérez", email: "juan@example.com", phone: "123456789", status: "Ejecución" },
        { name: "María López", email: "maria@example.com", phone: "987654321", status: "Inicio" }
    ];

    const clientList = document.getElementById("client-list");
    clients.forEach(client => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.status}</td>
            <td><button class="btn-edit">Editar</button></td>
        `;
        clientList.appendChild(row);
    });
});

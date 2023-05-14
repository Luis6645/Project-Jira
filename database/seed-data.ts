interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}




export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Anim aliqua elit ullamco et tempor.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En progreso: Mollit aliquip incididunt ullamco ad.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Finalizada: Reprehenderit eu dolore reprehenderit ut ad.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}
export default function Chamada() {

    return (
        <section className="bg-blue-300 flex flex-row flex-wrap justify-center items-center w-screen gap-8 py-8">
            <div>
                <h1 className="text-4xl font-semibold">Plataforma de Educação </h1>
            </div>
            <div className="max-w-lg">
                <p className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique necessitatibus ducimus pariatur aliquid dolore omnis perspiciatis eius, deserunt dolorem vel eveniet a voluptas fuga possimus, amet soluta, illo veniam.</p>
                <div className="my-4">
                    <button className="bg-white p-2 font-semibold rounded-md">Estudande</button>
                    <button className="p-2 font-semibold rounded-md">Mentor</button>
                </div>
            </div>
        </section>
    )
}
export default function ClientDetails({ClientName, clientAddress}){
    return(
        <>
       <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1 ">{ClientName}</h2>
        <p>{clientAddress}</p>
       </section>
        </>
    )
}
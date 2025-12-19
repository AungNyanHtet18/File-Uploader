import '../../app/globals.css'

export default function InfoLayout({children} : {children: React.ReactNode}) {
     return (
       <section className="py-4 px-20 h-screen" >
           {children}
       </section>
     )
}
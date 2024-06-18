export default function SectionWraper ({title,text, children}) {
return (
    <>
<h3>{title}</h3>
<p>{text}</p>
<div>{children}</div>
</>
)
}
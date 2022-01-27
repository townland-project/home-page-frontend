export const Lines = (props: Props) => {
    return (
        <svg className={props.className} width="84" height="79" viewBox="0 0 84 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="5" x2="64" y2="5" stroke={props.color} strokeWidth="4" strokeLinecap="round" />
            <line x1="13.1373" y1="42.6456" x2="67.1187" y2="17.4737" stroke={props.color} strokeWidth="4" strokeLinecap="round" />
            <line x1="41.1618" y1="74.4846" x2="79.4474" y2="28.8576" stroke={props.color} strokeWidth="4" strokeLinecap="round" />
        </svg>
    )
}

interface Props {
    color: string
    className: string
}
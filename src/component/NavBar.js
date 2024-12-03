import Link from "next/link";

export default function NavBar() {
    return (
        <div>
            <Link href="/"> io Home </Link> |
            <Link href="/test"> io Home </Link> |
            <Link href="/foo"> io Home </Link> |
            <Link href="/foo/about"> io Home </Link> |
        </div>
    )
}
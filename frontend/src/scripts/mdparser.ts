export default function getLinksFromMD(md: string): string[] {
    const regex = /!?\[([^\]]*)\]\(([^\)]+)\)/gm
    const res = md.match(regex)
    if (res == null) {
        return []
    } else {
        return res
    }
}

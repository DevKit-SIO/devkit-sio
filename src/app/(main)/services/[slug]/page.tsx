type PageProps = { params: Promise<{ slug: string }> }

export default async function Service({params}: PageProps) {
    const {slug} = await params;

    return (
        <></>
    )
}

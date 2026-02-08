type PageProps = { params: Promise<{ slug: string }> }

export default async function Solution({params}: PageProps) {
    const {slug} = await params;

    return (
        <></>
    )
}

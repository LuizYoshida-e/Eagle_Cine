export default async function Page({
    params,
}: PageProps<"/[lang]/filmes/[slug]">) {

const { lang } = await params;

return (
    <h1>SLUG</h1>
)

}
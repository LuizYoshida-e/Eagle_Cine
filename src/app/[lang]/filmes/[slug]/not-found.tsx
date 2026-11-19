export default async function Page({
    params,
}: PageProps<"/[lang]/filmes">) {

const { lang } = await params;

return (
    <h1>not found</h1>
)

}
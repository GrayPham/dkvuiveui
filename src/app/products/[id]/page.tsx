
const ViewDetailProduct = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <p>
                Product detail {params.id}
            </p>

        </div >
    )
}
export default ViewDetailProduct
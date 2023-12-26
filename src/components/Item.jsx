function Item(props){
    let {foodItem}=props;
    return ( <li  className="list-group-item vk-item ">
    <span className="vk-span">{foodItem}</span>
  </li>
    )

};
export default Item;
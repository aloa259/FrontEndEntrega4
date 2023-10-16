import { useEffect, useState } from "react";
import Posts from "./Posts";
import { useUserContext } from "./context/user-context";


function PostsList({posts,search}) {
    
    return (
        <div className="d-flex flex-wrap">
            {posts
                .filter(e => e.text.toLowerCase().includes(search.toLowerCase()))
                .map((post) => (
                    <Posts
                        key={post.id}
                        date={post.createdAt}
                        actor={"Autor"}
                        descripcion={post.text}
                        comentarios={"comentario"}
                        im={post.image}
                        likes={post.likes}
                    />
                ))
            }
        </div>
    );
}

export default PostsList;

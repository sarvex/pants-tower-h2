(function() {var implementors = {};
implementors["tower_h2"] = [{text:"impl&lt;C, E, S&gt; <a class=\"trait\" href=\"https://docs.rs/tower/0.1.0/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; for <a class=\"struct\" href=\"tower_h2/client/struct.Connect.html\" title=\"struct tower_h2::client::Connect\">Connect</a>&lt;C, E, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Connect + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;<a class=\"struct\" href=\"tower_h2/client/struct.Background.html\" title=\"struct tower_h2::client::Background\">Background</a>&lt;C::Connected, S&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tower_h2/trait.Body.html\" title=\"trait tower_h2::Body\">Body</a> + 'static,&nbsp;</span>",synthetic:false,types:["tower_h2::client::connect::Connect"]},{text:"impl&lt;T, E, S&gt; <a class=\"trait\" href=\"https://docs.rs/tower/0.1.0/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.1.14/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"tower_h2/client/struct.Connection.html\" title=\"struct tower_h2::client::Connection\">Connection</a>&lt;T, E, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tower_h2/trait.Body.html\" title=\"trait tower_h2::Body\">Body</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"tower_h2/trait.Body.html#associatedtype.Data\" title=\"type tower_h2::Body::Data\">Data</a>: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4.11/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;<a class=\"struct\" href=\"tower_h2/client/struct.Background.html\" title=\"struct tower_h2::client::Background\">Background</a>&lt;T, S&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.10/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.10/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["tower_h2::client::connection::Connection"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

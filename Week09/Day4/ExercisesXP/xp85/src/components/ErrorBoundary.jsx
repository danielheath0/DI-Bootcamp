import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hasError:false
        }
    }
    
    componentDidCatch = (error,errorInfo) => {
        console.error(error,errorInfo)
        this.setState({hasError:true})
    }

    render() { 
        if (this.state.hasError) return this.props.fallback
        return this.props.children;
    }
}
 
export default ErrorBoundary;
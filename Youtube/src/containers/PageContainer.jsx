import React from 'react'
import PropTypes from 'prop-types'

const PageContainer = ({ children }) => {
    return (
        <div className="flex w-full">
            {children}
        </div>
    )
}
PageContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageContainer


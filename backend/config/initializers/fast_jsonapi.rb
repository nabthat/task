module FastJsonapi
  
  module Pagination

    def initialize resource, options = {}
      if resource.kind_of? ActiveRecord::Relation
        if resource.respond_to? :total_pages
          options[:meta] ||= {}
          options[:meta][:total_resources] = resource.total_entries
          options[:meta][:resources_per_page] = resource.per_page
          options[:meta][:page] = resource.current_page
        end
      end
      super
    end

  end

end
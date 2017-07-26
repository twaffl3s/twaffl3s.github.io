module Jekyll
  module TabIndexFilter
    def tab_index(post_index)
      # we add 9 because of the links in the nav
      post_index + 9
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)